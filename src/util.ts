type IDataBase = {
  description: string
}
type IDataType = IDataBase & (
  { type: 'string' | 'number' | 'integer' | 'boolean' } |
  { type: 'array', items: IDataType } |
  { type: 'object', properties: Record<string, IDataType> }
)

export const covertJSONToTS = (json: IDataType) => {

  if (json.type === 'object') {
    return convertObjectToTS(json.properties)
  } else if (json.type === 'array') {
    return [covertJSONToTS(json.items)]
  } else {
    return getType(json.type) + '  // ' + json.description
  }
}

function convertObjectToTS(object: Record<string, IDataType>) {
  let result: Record<string, any> = {}

  for (const key in object) {
    const value = object[key]
    result[key] = covertJSONToTS(value)
  }

  return result
}

function getType(type: IDataType['type']) {
  if (type === 'integer') return 'number'
  return type
}
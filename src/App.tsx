
import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import './App.css'
import { covertJSONToTS } from './util'

const App: React.FC<{ env: string }> = () => {
  const [resultVal, setResultVal] = useState('')
  const [form] = Form.useForm()

  const onClickGenerate = () => {
    const json = form.getFieldValue('yapiJson')
    console.log('[faiz:] === json', json)
    try {
      const obj = JSON.parse(json)
      const result = covertJSONToTS(obj)
      setResultVal(JSON.stringify(result, null, 2))
      console.log('[faiz:] === result', result)
    } catch (error) {
      message.error('JSON 格式化失败')
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-2/5">
        <Form form={form}>
          <Form.Item name="yapiJson" noStyle>
            <Input.TextArea rows={15} placeholder="请输入 Yapi 原始 json" />
          </Form.Item>
        </Form>
      </div>
      <Button type="primary" className="mx-4" onClick={onClickGenerate}>点击生成 ts</Button>
      <div className="w-2/5">
        <Input.TextArea rows={15} placeholder="" value={resultVal} />
      </div>
    </div>
  )
}

export default App

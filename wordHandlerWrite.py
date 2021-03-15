from docx import Document
from docx.shared import Inches
import re
import sys
import json


# doc = Document(sys.argv[1])

doc = Document('./uploads/1608469102615-1.docx')

# obj = json.loads(json.dumps(sys.argv[2]))

obj = {'姓名': 'ggg'}

# 按表格读取全部数据
for table in doc.tables:
    for row in table.rows:
      if row.cells[0].text.replace('\n', '').replace('\r', '').replace(' ', '').replace('：', '').replace(':', '') in obj:
        # row.cells[1].text = obj[row.cells[0].text.replace('\n', '').replace('\r', '').replace(' ', '').replace('：', '').replace(':', '')]
        row.cells[2].text = obj[row.cells[0].text.replace('\n', '').replace('\r', '').replace(' ', '').replace('：', '').replace(':', '')]
doc.add_page_break()
doc.save('demo.docx')
content = {}

content['msg'] = '修改成功'
# content['cell'] = sorted(set(celltext), key=celltext.index)

print(json.dumps(content))
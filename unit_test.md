# ==================================== FE ====================================
# Unit Test là gì?
- `Unit test` là một phương pháp kiểm thử phần mềm bằng cách viết code hay còn gọi là `test case` -> để kiểm tra một `đơn vị nhỏ nhất` trong dự án
- `đơn vị nhỏ nhất` thường là các `function,method,class,module,component,hook,utility,helper,...` -> xem có hoạt động đúng ko
---
# Unit Test quan trọng như thế nào trong dự án phần mềm?
- Phát hiện bug sớm
- Giảm áp lực cho QA/Tester, tránh bug ghi deploy production
- Dễ dàng refactor code -> ko sợ làm hỏng các tính năng khác
- Tài liệu sống
- Tự động hoá kiểm thử CI/CD mỗi lần push code lên GitHub Actions, Git Lab CI,.... thi sẽ chạy tự động test trước khi deploy production
- Khi  `refactor` hay `maintain` chỉ cần chạy lại unit test -> nếu failse -> đang có bug
--- 
# File file cấu hình
- `jest.config.ts`: cấu hình chính cho jest
- `jest.setup.ts`: chạy trước mỗi `test case`, dùng để setup global (mock,import,..)
- `package.json`: 2 dòng script chạy test
- `vite.config.js`: cấu hình bundler Vite khi chạy dev/build/test
- `tsconfig.json`: Cấu hình chung TypeScript cho dự án
- `tsconfig.app.json`: Kế thừa tsconfig.json,(dành cho app code trong thư mục src)
---
#
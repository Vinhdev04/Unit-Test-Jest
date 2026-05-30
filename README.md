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
- Khi `refactor` hay `maintain` chỉ cần chạy lại unit test -> nếu failse -> đang có bug

---

# File file cấu hình

- `jest.config.ts`: cấu hình chính cho jest
- `jest.setup.ts`: chạy trước mỗi `test case`, dùng để setup global (mock,import,..)
- `package.json`: 2 dòng script chạy test
- `vite.config.js`: cấu hình bundler Vite khi chạy dev/build/test
- `tsconfig.json`: Cấu hình chung TypeScript cho dự án
- `tsconfig.app.json`: Kế thừa tsconfig.json,(dành cho app code trong thư mục src)

---

# Thư viện

| Thư viện                        | Mục đích                                                                                                  |
| ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **jest**                        | Framework chạy Unit Test chính. Cung cấp `describe()`, `it()`, `test()`, `expect()`...                    |
| **ts-jest**                     | Cho phép Jest hiểu và chạy trực tiếp file `.ts`, `.tsx`.                                                  |
| **ts-node**                     | Chạy file TypeScript mà không cần build sang JavaScript trước. Thường dùng khi đọc file `jest.config.ts`. |
| **jest-environment-jsdom**      | Tạo môi trường giả lập trình duyệt (DOM) để test React Component.                                         |
| **@types/jest**                 | Cung cấp TypeScript typing cho Jest (`describe`, `expect`, `jest.fn`...).                                 |
| **@testing-library/react**      | Render React Component để test giao diện và hành vi người dùng.                                           |
| **@testing-library/jest-dom**   | Bổ sung các matcher dễ đọc như `toBeInTheDocument()`, `toHaveTextContent()`, `toBeDisabled()`.            |
| **@testing-library/user-event** | Mô phỏng thao tác người dùng thực tế như click, nhập liệu, chọn option.                                   |
| **lodash**                      | Thư viện utility hỗ trợ xử lý array, object, string, debounce, cloneDeep...                               |
| **react-hook-form**             | Quản lý form trong React, validate dữ liệu, tối ưu re-render.                                             |

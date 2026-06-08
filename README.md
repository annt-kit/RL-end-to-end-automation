# RL End-to-End Automation Testing

A comprehensive Playwright-based end-to-end automation testing suite for the Reflective Learning application. This project includes tests for authentication, user profiles, and other critical user workflows.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **npm** (comes with Node.js)

Verify your installation:
```bash
node --version
npm --version
git --version
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd RL-end-to-end-automation
```

### 2. Install Dependencies

Install all required packages including Playwright:

```bash
npm install
```

This will install:
- `@playwright/test` - Playwright testing framework
- `@types/node` - TypeScript types for Node.js

### 3. Install Playwright Browsers

After npm installation, install the required browsers:

```bash
npx playwright install
```

This installs Chromium, Firefox, and WebKit browsers that Playwright needs to run tests.

## 🧪 Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in a Specific Browser

```bash
# Chrome only
npx playwright test --project=chrome

# Firefox only
npx playwright test --project=firefox

# WebKit only
npx playwright test --project=webkit
```

### Run a Specific Test Suite

```bash
# Login tests
npx playwright test tests/login

# Forgot password tests
npx playwright test tests/forgot-password

# Profile tests
npx playwright test tests/profile
```

### Run a Single Test File

```bash
npx playwright test tests/login/L001-login-empty-data.spec.ts
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

This opens the Playwright Inspector, allowing you to step through tests line by line.

### Run Tests with UI Mode

```bash
npx playwright test --ui
```

This opens an interactive UI where you can see tests running in real-time.

## 📁 Project Structure

```
tests/
├── login/                          # Login functionality tests
│   ├── L001-login-empty-data.spec.ts
│   ├── L002-login-empty-email.spec.ts
│   └── ... (12 test files)
├── forgot-password/                # Forgot password functionality tests
│   ├── FP01-forgot-pwd-existing-email.spec.ts
│   └── ... (5 test files)
├── profile/                        # User profile update tests
│   ├── Pr01-update-profile-empty.spec.ts
│   └── ... (18 test files)
├── manual-emblem/                  # Manual emblem tests
│   └── ... (4 test files)
├── protected-pages/                # Protected pages tests
├── register/                       # Registration tests
└── static-pages/                   # Static pages tests

playwright.config.ts                # Playwright configuration
auth.json                           # Authentication state data
package.json                        # Project dependencies
```

## ⚙️ Configuration

### Playwright Configuration (`playwright.config.ts`)

Key settings:
- **Test Directory**: `./tests` - Contains all test files
- **Fully Parallel**: Tests run in parallel for faster execution
- **Retries**: 0 on local machines, 2 on CI environment
- **Workers**: Unlimited on local, 1 on CI
- **Reporter**: HTML report generation
- **Trace**: Captured on first retry for debugging

### Authentication State (`auth.json`)

This file contains authentication cookies and state for the application. It's used to maintain logged-in sessions between tests.

## 📊 Test Reports

After running tests, an HTML report is automatically generated:

```bash
npx playwright show-report
```

This opens the Playwright HTML reporter showing:
- Test results (passed/failed)
- Test duration
- Screenshots and videos (if captured)
- Detailed error information

Reports are located in the `playwright-report/` directory.

## 🧬 Test Coverage

The test suite covers:

| Category | Tests | Coverage |
|----------|-------|----------|
| **Login** | 12 tests | Email validation, password validation, login success |
| **Forgot Password** | 5 tests | Email validation, existing/non-existing users |
| **Profile** | 18 tests | Name, password, phone, salary validation |
| **Manual Emblem** | 4 tests | Character limit validation (draft & save) |
| **Protected Pages** | Multiple | Authorization tests |
| **Registration** | Multiple | Registration workflow |
| **Static Pages** | Multiple | Page load & content verification |

## 🔍 Debugging Tips

### View Test Traces

Playwright captures traces on first retry. View them:

```bash
npx playwright show-trace <trace-file-path>
```

### Run a Single Test with Debug

```bash
npx playwright test tests/login/L012-login-successfully.spec.ts --debug
```

### Inspect Elements in UI Mode

Use the `--ui` flag to pause at specific steps and inspect elements in the browser.

### Check Test Results

```bash
# Show the last report
npx playwright show-report
```

## 🔧 Environment Variables

If you need to configure specific settings, you can set environment variables:

- `CI` - Set to enable CI mode (reduced workers, increased retries)

Example:
```bash
CI=true npx playwright test
```

## 📝 Writing New Tests

New tests should follow the naming convention: `<ID>-<test-description>.spec.ts`

Example:
```
tests/login/L013-login-remember-me.spec.ts
```

### Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com');
  await page.fill('input[type="email"]', 'user@example.com');
  await page.fill('input[type="password"]', 'password123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveTitle('Dashboard');
});
```

## 🐛 Troubleshooting

### Issue: Tests fail with "Browser not found"

**Solution**: Install Playwright browsers
```bash
npx playwright install
```

### Issue: Tests timeout

**Solution**: Increase timeout in `playwright.config.ts` or per test:
```typescript
test.setTimeout(60000); // 60 seconds
```

### Issue: Authentication state not loading

**Solution**: Verify `auth.json` exists and contains valid session data.

### Issue: "Cannot find module" error

**Solution**: Install dependencies
```bash
npm install
npx playwright install
```

### Issue: Tests fail on CI but pass locally

**Solution**: Check CI environment variables and browser compatibility. Run with:
```bash
CI=true npx playwright test
```

## 📚 Useful Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Selectors Guide](https://playwright.dev/docs/locators)
- [Assertions Guide](https://playwright.dev/docs/test-assertions)

## 👥 Contributing

When adding new tests:

1. Follow the existing naming convention
2. Organize tests in appropriate feature folders
3. Add descriptive test names
4. Use locators instead of selectors when possible
5. Add comments for complex logic
6. Test on multiple browsers (Chrome, Firefox, WebKit)

## 📞 Support

If you encounter issues:

1. Check this README's troubleshooting section
2. Review test error messages in the HTML report
3. Run tests in debug mode: `npx playwright test --debug`
4. Check Playwright [documentation](https://playwright.dev/)

## 📄 License

This project is part of the Reflective Learning automation testing suite.

---

**Happy Testing!** 🎉

# My Updated Custom GitHub Action

This GitHub Action prints a message and optionally converts it to uppercase.

## 📌 Inputs

| Name        | Required | Description                        |
|-------------|----------|------------------------------------|
| `message`   | Yes      | The message to print               |
| `uppercase` | No       | Convert message to uppercase       |

## 📤 Outputs

| Name      | Description              |
|-----------|--------------------------|
| `result`  | The processed message    |

---

### Inputs

| Name      | Required | Description                        |
|-----------|----------|------------------------------------|
| message   | Yes      | Message to print                   |
| uppercase | No       | Convert message to uppercase        |

### Example Usage
```yaml
uses: my-org/my-action@v1
with:
  message: "Hello World"
  uppercase: true
```

## 🚀 Example Usage

```yaml
name: Example Workflow

on: [push]

jobs:
  demo:
    runs-on: ubuntu-latest
    steps:
      - name: Use updated action
        uses: your-username/my-action@v1
        with:
          message: "Hello World"
          uppercase: true



# Word Counter (Strict) API — v1

A stateless utility API that counts words using strict whitespace separation.
No punctuation logic, no NLP, no state.

## Endpoint

POST `/v1/word-count`

### Request
```json
{
  "text": "Hello world from the factory"
}
{
  "word_count": 5
}
{ "status": "ok" }

---

## ✅ How to verify (2 checks)

1. **Health**

2. **Function**
Use browser dev tools, Postman, or curl:

```bash
curl -X POST https://<your-render-url>/v1/word-count \
  -H "Content-Type: application/json" \
  -d '{"text":"one two three"}'
{ "word_count": 3 }

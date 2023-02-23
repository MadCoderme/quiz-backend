## Endpoints

### Post `/quiz`
Creates a new quiz. Body data format should follow the specified data stucture. Returns the newly created data `id` on success.

### Get `/quiz`
Returns all information about the requested quiz. Accepts a query parameter `id`

## Data Structure

```js
[
    {
        id: '1',
        title: '',
        description: '',
        questions: [
            {
                question: '',
                isMandatory: true,
                replyOptions: [
                    '', '', ''
                ],
                rightAnswer: ''
            }
        ]
    }
]
```

## Error codes

| Error Code  | Description |
| ------------- | ------------- |
| 0  | Internal Error  |
| 1  | Requested data could not be found  |
| 2  | Request data is badly formatted |
| 3  | Questions length cannot be 0 |

## Postman Collection
https://www.postman.com/security-observer-77708084/workspace/abrar-s-den/collection/16408891-791a71bd-4219-45ec-9aa7-f7263c0bb187?action=share&creator=16408891

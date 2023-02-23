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

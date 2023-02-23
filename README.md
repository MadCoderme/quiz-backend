## Endpoints


## Data Structure

```
const dbData = [
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
0 - Internal Server Error
1 - Data could not be found
2 - Request data is badly formatted
3 - Questions length cannot be 0
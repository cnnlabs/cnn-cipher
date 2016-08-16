# CNN Cipher

A module that builds graphql queries.

## Bower Installation

```shell
$ bower install cnn-cipher
```

## Example: Browser

Download the script from dist and add it your public directory

```
<script src="your-public-root/cnn.ciper.min.js" async>
```

Invoke by passing in an object representing a query

```
Cipher.createGraphQLQuery({
    name: 'person',
    params: [
        {
            name: 'param1',
            value:'value1'
        }
    ],
    fields: [
        {
            name: 'head'
        },
        {
            name: 'heart'
        },
        {
            name: 'hand',
            values: [
                {
                    name: 'thumb'
                },
                {
                    name: 'index',
                    values: [
                        {
                            name: 'nail'
                        }
                    ]
                }
            ]
        }
    ]
});
```

Returned value

```
"person(param1:"value1"){head,heart,hand{thumb,index{nail}}}"
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The code and the documentation are released under the [LICENSE.md](LICENSE.md).

# CNN Cipher

A module that builds graphql queries.

## Why

Creating client side graphql queries can be awkward and cumbersome. This module
aims to help developers construct queries in a format that is familiar - JSON.

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
            value: 'value1'
        }
    ],
    fields: [
        {
            name: 'head', 
            values: [
                { 
                    name: 'eyes'
                }, 
                {
                    name: 'nose'
                }
            ]
        },
        {
            name: 'heart'
        },
        {
            name: 'leftHand',
            fragment: 'handFragment'
        }, 
        {
            name: 'rightHand',
            fragment: 'handFragment'
        }
    ],
    fragments: [ 
        { 
            name: 'fingerFragment', 
            on: 'finger',
            values: [
                { 
                    name: 'proximalPhalanx'
                },
                { 
                    name: 'intermediatePhalanx'
                },
                { 
                    name: 'distalPhalanx'
                },
                {
                   name: 'nail'
                }
            ]
        }, 
        { 
            name: 'handFragment', 
            on: 'hand', 
            values: [
                { 
                    name:'thumb'
                },
                { 
                    name:'indexFinger',
                    fragment: 'fingerFragment'
                }, 
                { 
                    name: 'middleFinger',
                    fragment: 'fingerFragment'
                },
                { 
                    name: 'ringFinger',
                    fragment: 'fingerFragment'
                },
                { 
                    name: 'pinkyFinger',
                    fragment: 'fingerFragment'
                },
            ]
        }
    ]
});
```

Returned value

```
"person(param1 :"value1"){head { eyes,nose },heart,leftHand { ...handFragment },rightHand { ...handFragment }} fragment fingerFragment on finger { proximalPhalanx,intermediatePhalanx,distalPhalanx,nail } , fragment handFragment on hand { thumb,indexFinger { ...fingerFragment },middleFinger { ...fingerFragment },ringFinger { ...fingerFragment },pinkyFinger { ...fingerFragment } } "
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The code and the documentation are released under the [LICENSE.md](LICENSE.md).

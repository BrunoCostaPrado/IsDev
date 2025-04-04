# IsDev

## Choose when to renders a component

## Dev

```ts
  import {DevOnly} from 'isDev'

  return(
    <>
   <DevOnly>
   <DevComponent/>
    </DevOnly>
    </>
  )
```

## Prod

```ts
  import {ProdOnly} from 'isDev'

  return(
    <>
   <ProdOnly>
   <ProdComponent/>
    </ProdOnly>
    </>
  )
```

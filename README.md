# ReactCard
this is a component for React. you can create swipable card easily.

# usage

```
npm install react-card-list --save
```


```javascript
import CardList from 'react-card-list';
// you can style the cardItem and the outer frame as you like.
import {viewport, cardItem} from './your/style.scss'

const opt = {
    distance: 200,  //px
    duration: 150   //ms
}
const view = () =>{
    return <div>
        <CardList ref="cl" className={viewport} {...opt}>
            {[1,2,3,4,5,6,7,8,9,10].map((item, index)=>{
                return <div className={cardItem} key={index} onClick={_=>console.info(index)}>{index}</div>
            })}
        </CardList>
        <button onClick={_=>this.refs.cl.next()}>click me next</button>
        <button onClick={_=>this.refs.cl.prev()}>click me prev</button>
        <button onClick={_=>this.refs.cl.moveTo(4)}>click me jump to 4th card</button>
    </div>
}

```

# dep
use [flipsnap.js](https://github.com/hokaccha/js-flipsnap), but beyond it, need not set `width` for outer div. just put div into it, it works well as well.

# demo
!()[https://github.com/IAIAE/ReactCard/blob/master/img/demo.gif]



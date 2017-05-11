import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import Flipsnap from 'flipsnap';
class CrossCard extends Component{
    constructor(props) {
        super(props)
    }
    getDistance(){
        if(!this.item_vw){
            return 0;
        }else{
            let aItem = this.refs.holder.childNodes[0];
            return Math.Max(+aItem.style.marginLeft, +aItem.style.marginRight) + this.item_vw;
        }
    }
    updateWidth(){
        this.vw = this.refs.viewport.clientWidth;
        let aItem = this.refs.holder.childNodes;
        if(aItem){
            this.item_vw = aItem[0].clientWidth;
        }
        this.holderWidth = this.refs.holder.clientWidth;
    }
    componentDidMount(){
        let {distance, stick, duration} = this.props;
        this.flipsnap = Flipsnap(this.refs.holder, Object.assign({
            transitionDuration: duration || 150
        },distance && {distance}));
    }
    next(){
        this.flipsnap && this.flipsnap.toNext();
    }
    prev(){
        this.flipsnap && this.flipsnap.toPrev();
    }
    moveTo(num, fast){
        if(!fast){
            this.flipsnap.moveToPoint(num);
        }
    }
    componentWillUnMount(){
        this.flipsnap.destroy();
    }
    render() {
        const {props} = this;
        let {stick, duration} = props;
      return (
          <div ref="viewport" className={[styles.viewport, props.className].join(' ')} >
            <div ref="holder" className={styles.holder}>
                {props.children}
            </div>
          </div>
      );
    }
}

export default CrossCard
import React, { Component } from 'react'
import './home.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap'

const items = [
    {
        id: 1,
        src: 'http://via.placeholder.com/1000x300',
        altText: 'slide 1',
        caption: 'Slice 1'
    },
    {
        id: 2,
        src: 'http://via.placeholder.com/1000x300',
        altText: 'slide 2',
        caption: 'Slice 3'
    },
    {
        id: 3,
        src: 'http://via.placeholder.com/1000x300',
        altText: 'slide 3',
        caption: 'Slice 3'
    }
]

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { activeIndex: 0 }
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
        this.onExiting = this.onExiting.bind(this)
        this.onExited = this.onExited.bind(this)
      }
    
      onExiting() {
        this.animating = true
      }
    
      onExited() {
        this.animating = false
      }
    
      next() {
        if (this.animating) {
            return
        }
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
        this.setState({ activeIndex: nextIndex })
      }
    
      previous() {
        if (this.animating) {
            return
        }
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
        this.setState({ activeIndex: nextIndex })
      }
    
      goToIndex(newIndex) {
        if (this.animating) {
            return
        }
        this.setState({ activeIndex: newIndex })
      }
    
      render() {
        const { activeIndex } = this.state
    
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.id}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          )
        })
    
        return (
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        )
      }
}

export default Home
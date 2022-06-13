import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css'

export default class ImageGallery extends Component {
  render() {
    const images = this.props.data;
    return (
        <ul className={s.ImageGallery}>
{images.map(image => {
    return (
        <ImageGalleryItem key={image.id} smallImage = {image.webformatURL} largeImage={image.largeImageURL} desc = {image.tags}/>
    )
})}
        </ul>
    )

  }
}

import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);
    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album, //store const album as a property of state object
      currentSong: album.songs[0],
      isPlaying: false,
      isHovered: false
    };
    //audio element doesn't need to be attached to the DOM, that's why it's outside of the state
    //audio element needs to be accessed within the class methods, therefore assigned to 'this'
    this.audioElement = document.createElement('audio');
    //playback will start on the first track
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    //change the playback song
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song){
    const isSameSong = this.state.currentSong === song;
    if(this.state.isPlaying && isSameSong){//If the user clicked on the currently playing song
      this.pause();
    } else {
      if(!isSameSong){
        this.setSong(song);
      }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>
           <tbody>
           {
             this.state.album.songs.map((song,index) =>
             <tr className="song"
               key={index}
               onClick={() => this.handleSongClick(song)}
               onMouseEnter={() => this.setState({ isHovered: index+1 })}
               onMouseLeave={() => this.setState({ isHovered: false })}
             >
               <td className="song-actions">
                 { //Current selected song is not playing?
                   (this.state.currentSong === song && this.state.isPlaying)?
                   //If the current song is playing: show a pause button
                   //If the current song is not playing: show a play button
                   <span className={this.state.isPlaying? "ion-md-pause" : "ion-md-play"}></span>
                   :
                   (this.state.isHovered === index+1)?
                   //When the song is hovered, show a play icon
                   <span className="ion-md-play"></span>
                   :
                   //when the song is not hovered, show a song number
                   <span className="song-number">{index+1}</span>
                 }
               </td>
               <td className="song-title">{song.title}</td>
               <td className="song-duration">{song.duration}</td>
            </tr>
           )}
           </tbody>
         </table>
         <PlayerBar
           isPlaying={this.state.isPlaying}
           currentSong={this.state.currentSong}
           handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           handlePrevClick={() => this.handlePrevClick()}
         />
      </section>
    );
  }
}

export default Album;

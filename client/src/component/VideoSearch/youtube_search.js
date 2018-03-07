import _ from "lodash";
import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import { SearchBar } from "./search_bar";
import { VideoList } from "./video_list";
import { VideoDetail } from "./video_detail";
import "./youtube_search.css"
const API_KEY = "AIzaSyBIyJXdO1axAAJIAnJWMJ6DGQPvpzyr2NE";

export class YouTubeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("freediving");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="video-search">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
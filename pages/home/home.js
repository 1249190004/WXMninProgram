import {getMultiData} from '../../services/home.js'
import request from "../../services/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const res = await getMultiData()
    console.log(res);
    this.setData({
      banners:res.data.data.banner.list,
      recommends:res.data.data.recommend.list
    })
  },
  handleChooseAlbum(){
    wx.chooseImage({
      success:(res)=>{
        console.log(res)
      }
    })
  },
  handleTabClick(e){
    const index= e.detail.index
    console.log(index);
  }
})
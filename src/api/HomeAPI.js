import axiosClient from './axiosClient'

const homeApi = {
  getTopRevenue: (params) => {
    const url = '/home/revenue/toprevenue'
    return axiosClient.get(url, { params })
  },

  getTopSell: (params) => {
    const url = `home/revenue/topsellitem`
    return axiosClient.get(url, { params })
  },

  /* Category */
  getTotalSell: (params) => {
    const url = `/home/category/totalsales`
    return axiosClient.get(url, { params })
  },

  getTopCoupang: (params) => {
    const url = `/home/category/topcoupang`
    return axiosClient.get(url, { params })
  },

  getTopauction: (params) => {
    const url = `/home/category/topauction`
    return axiosClient.get(url, { params })
  },

  getTopSmartstore: (params) => {
    const url = `/home/category/topsmartstore`
    return axiosClient.get(url, { params })
  },

  getTopWemake: (params) => {
    const url = `/home/category/topwemake`
    return axiosClient.get(url, { params })
  },

  getTopTmon: (params) => {
    const url = `/home/category/toptmon`
    return axiosClient.get(url, { params })
  },

  getTopInterpark: (params) => {
    const url = `/home/category/topinterpark`
    return axiosClient.get(url, { params })
  },

  getTop11str: (params) => {
    const url = `/home/category/top11str`
    return axiosClient.get(url, { params })
  },

  getTopGmarket: (params) => {
    const url = `/home/category/topgmarket`
    return axiosClient.get(url, { params })
  },

  /* Market */
  getAnalysisMarket: (params) => {
    const url = `/home/market`
    return axiosClient.get(url, { params })
  },
}

export default homeApi

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

  // Top product
  getTopCoupang: (params) => {
    const url = `/home/category/topproduct?market=쿠팡`
    return axiosClient.get(url, { params })
  },

  getTopauction: (params) => {
    const url = `/home/category/topproduct?market=옥션`
    return axiosClient.get(url, { params })
  },

  getTopSmartstore: (params) => {
    const url = `/home/category/topproduct?market=스마트스토어`
    return axiosClient.get(url, { params })
  },

  getTopWemake: (params) => {
    const url = `/home/category/topproduct?market=위메프`
    return axiosClient.get(url, { params })
  },

  getTopTmon: (params) => {
    const url = `/home/category/topproduct?market=티몬`
    return axiosClient.get(url, { params })
  },

  getTopInterpark: (params) => {
    const url = `/home/category/topproduct?market=인터파크`
    return axiosClient.get(url, { params })
  },

  getTop11str: (params) => {
    const url = `/home/category/topproduct?market=11번가`
    return axiosClient.get(url, { params })
  },

  getTopGmarket: (params) => {
    const url = `/home/category/topproduct?market=G마켓`
    return axiosClient.get(url, { params })
  },

  /* Market */
  getAnalysisMarket: (params) => {
    const url = `/home/market`
    return axiosClient.get(url, { params })
  },

  /* Get Market Total Sale */
  getMarketTotalSale: (params) => {
    const url = `/home/market/totalsale`
    return axiosClient.get(url, { params })
  },
}

export default homeApi

import axiosAdmin from './axiosAdmin'

const adminApi = {
  dowloadPdfFile: (user_id) => {
    const url = `/admin/exportlicense?user_id=${user_id}`
    return axiosAdmin.get(url, {
      responseType: 'blob',
    })
  },
}

export default adminApi

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_DATA':
      const {
        heading,
        category,
        language,
        level,
        duration,
        lessons,
        price,
        maxStudent,
        description,
        image,
        learn,
        requirement,
        target,
        courseData,
        material,
      } = action.payload

      return {
        ...state,
        heading,
        category,
        language,
        level,
        duration,
        lessons,
        price,
        maxStudent,
        description,
        image,
        learn,
        requirement,
        target,
        courseData,
        material,
      }
    case 'ADD_TO_CART':
      const newItem = {
        _id: Date.now(),
        point: '',
      }
      return { ...state, learn: [...state.learn, newItem] }
    case 'DELETE_CART':
      console.log(action.payload)
      const newItemm = state.learn.filter((data) => data._id !== action.payload)
      return { ...state, learn: newItemm }

    case 'HANDLEITEMCHANGE':
      let newDataa = state.learn.map((data) => {
        if (data._id == action.dispatch.id) {
          return {
            ...data,
            [action.dispatch.name]: action.dispatch.value,
          }
        }
        return data
      })

      return { ...state, learn: newDataa }

    case 'HANDLEREQCHANGE':
      let newReqqq = state.requirement.map((data) => {
        if (data._id == action.dispatch.id) {
          return {
            ...data,
            [action.dispatch.name]: action.dispatch.value,
          }
        }
        return data
      })

      return { ...state, requirement: newReqqq }
    case 'ADD_TO_REQ':
      const newReq = {
        _id: Date.now(),
        point: '',
      }
      return { ...state, requirement: [...state.requirement, newReq] }
    case 'DELETE_REQ':
      const newReqq = state.requirement.filter(
        (data) => data._id !== action.payload
      )
      return { ...state, requirement: newReqq }

    case 'HANDLETARCHANGE':
      let newTar = state.target.map((data) => {
        if (data._id == action.dispatch.id) {
          return {
            ...data,
            [action.dispatch.name]: action.dispatch.value,
          }
        }
        return data
      })

      return { ...state, target: newTar }
    case 'ADD_TO_TAR':
      const newTarr = {
        _id: Date.now(),
        point: '',
      }
      return { ...state, target: [...state.target, newTarr] }
    case 'DELETE_TAR':
      const newTarrr = state.target.filter(
        (data) => data._id !== action.payload
      )
      return { ...state, target: newTarrr }

    case 'HANDLEMARCHANGE':
      let newMar = state.material.map((data) => {
        if (data._id == action.dispatch.id) {
          return {
            ...data,
            [action.dispatch.name]: action.dispatch.value,
          }
        }
        return data
      })

      return { ...state, material: newMar }
    case 'ADD_TO_MAR':
      const newMaterial = {
        _id: Date.now(),
        heading: '',
      }
      return { ...state, material: [...state.material, newMaterial] }
    case 'DELETE_MAR':
      const newMarrr = state.material.filter(
        (data) => data._id !== action.payload
      )
      return { ...state, material: newMarrr }

    case 'ADD_TO_COURSE':
      const newCOURSE = {
        _id: Date.now(),
        heading: '',
        video: [
          {
            _id: Date.now(),
            link: '',
            heading: '',
          },
        ],
      }
      return { ...state, courseData: [...state.courseData, newCOURSE] }
    case 'DELETE_COURSE':
      const newCOUR = state.courseData.filter(
        (data) => data._id !== action.payload
      )
      return { ...state, courseData: newCOUR }

    case 'HANDLECOURSECHANGE':
      let newCourse = state.courseData.map((data) => {
        if (data._id == action.dispatch.id) {
          return {
            ...data,
            [action.dispatch.name]: action.dispatch.value,
          }
        }
        return data
      })

      return { ...state, courseData: newCourse }
    case 'HANDLEVIDEOCHANGE':
      let newCourseses = state.courseData.map((data) => {
        if (data._id == action.dispatch.courseId) {
          const newVideo = data.video.map((vi) => {
            if (vi._id == action.dispatch.id) {
              return {
                ...vi,
                [action.dispatch.name]: action.dispatch.value,
              }
            }
            return vi
          })
          return {
            ...data,
            video: newVideo,
          }
        }
        return data
      })
      return { ...state, courseData: newCourseses }
    case 'ADD_TO_VIDEO':
      const newVIDEO = {
        _id: Date.now(),
        link: '',
        heading: '',
      }
      let newCourseVideo = state.courseData.map((data) => {
        if (data._id == action.dispatch) {
          return { ...data, video: [...data.video, newVIDEO] }
        }
        return data
      })
      return { ...state, courseData: newCourseVideo }
    case 'DELETE_VIDEO':
      const newVideo = state.courseData.map((data) => {
        const newVideoss = data.video.filter(
          (data) => data._id !== action.dispatch
        )
        return { ...data, video: newVideoss }
      })
      return { ...state, courseData: newVideo }
    case 'HANDLEDUE':
      return { ...state, invoiceDate: action.dispatch }
    case 'HANDLEINVOICE':
      return { ...state, dueDate: action.dispatch }
    case 'HANDLENOTECHANGE':
      return { ...state, note: action.dispatch }
    case 'HANDLEFORMCHANGE':
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default dashboardReducer

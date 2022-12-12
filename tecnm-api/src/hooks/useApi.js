
const useAPI =  () => {
  
    const getRequest = async (URL) => {
      try {
        let response = await fetch(URL)
            return response.json()
        }catch(error) {
            console.log('Error',error)
        }
    }

    return {getRequest}
}

export default useAPI
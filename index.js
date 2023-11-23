const template = (item) => {
    return `
    <div>
    <p>Name:${item.name}</p>
    <p>Course:${item.course}</p>
    </div>
    `
}

const fetchData = async () => {
    try {
        fetch('http://localhost:3002/students')
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                const container = document.getElementById('container')
                let content = ''
                responseJson.data.map(item => content += template(item))
                container.innerHTML = content
            })
        // const responseFetch = fetch('http://localhost:3002/students')
        // const dataJson = (await responseFetch).json()
        // dataJson.then(
        //     item => console.log(item)
        // )
    } catch (error) {
        console.error(error)
    }

}

fetchData()
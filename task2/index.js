const wrapper = document.querySelector('.row')
const elements = wrapper.querySelectorAll('.col-lg-3')

const resizeElementsHeightOnLine = () => {
  elements.forEach((element)=>{
    element.style.height = null
  })

  const wrapperWidth = wrapper.offsetWidth
  const elementWidth = elements[0].querySelector('.thumbnail').offsetWidth
  const elementsOnLine = Math.floor(wrapperWidth / elementWidth)

  let maxHeightOnLine = 0

  elements.forEach((element, index, arr) => {
    const isLastElement = (index + 1) % elementsOnLine === 0

    if (maxHeightOnLine < element.offsetHeight) {
      maxHeightOnLine = element.offsetHeight
    }

    if (isLastElement) {
      for (let i = index; i > (index - elementsOnLine); i--) {
        arr[i].style.height = maxHeightOnLine + 'px'
      }

      maxHeightOnLine = 0
    }
  })
}


setTimeout(()=>{
  resizeElementsHeightOnLine()
}, 300)

window.addEventListener('resize', resizeElementsHeightOnLine);

<template>
        <div class="ration-screen column is-half is-offset-one-quarter">
            <div class="screen-img">
                <div class="media-img__inner "> 
                    <div class="iron-calc-scale">
                        <span class="iron-calc-scale__item">75%</span>
                        <span class="iron-calc-scale__item">50%</span>
                        <span class="iron-calc-scale__item">25%</span>
                    </div>
                    <span class="iron-calc-switcher js-scale-marker" style="top: ;"><span class="iron-calc-switcher__val"></span></span>
                </div>  
                <img src="@/assets/bear-1.png" alt="bear">
                <div class="baby-ration">Рацион малыша</div>
                <ul class="ration-list">

                </ul>
            </div>
        <div class="screen-info">
            <div class="screen-title mb-4">Укажите рацион на день:</div>      

            <div class="products">
                <Accordion>
                    <AccordionTab 
                        :header="`${ i.title }`"
                        v-for="i, ind in rationProducts"
                        :key="ind"
                    >
                        <div 
                            class="product"
                            v-for="product, index in i.products"
                            :key="index"  
                        >
                            <img v-bind:src="`${ product.imgTitle }`" v-bind:alt="`${ index }`" class="product-img">
                            <div class="product-title">{{ product.productTitle }}</div>

                            <SliderTwo 
                                :min="0" 
                                :max="product.sliderMaxValue" 
                                :class = "(itemRefs[index] === 0)?'begin':''"
                                v-model="itemRefs[index]" 
                                :units="`${ product.units }`" 
                                :ref="el => { if (product.productTitle)  itemRefs.push(0) }" 
                                :countableSlider="true"  
                                @calc="calсFer"                        
                            />
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
            <div class="footer-level">
                <Button 
                    label="Рассчитать" 
                    class="p-button-raised p-button-rounded p-button-lg mt-3"
                    @click="calсFer"
                />
            
                <Button 
                    label="Сброс" 
                    class="p-button-raised p-button-rounded p-button-lg mt-3"
                    @click="cancFer"
                />
            </div>
        </div>
    </div>

</template>

<script setup>

 //  imports

import Button from 'primevue/button';
import SliderTwo from '@/components/SliderTwo.vue';
import Slider from 'primevue/slider';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import { ref, reactive, onBeforeUpdate, onUpdated, onMounted, onBeforeMount} from 'vue';

// dynamic ref

let itemRefs = ref([])

const setItemRef = () => {
    itemRefs.value.push(0)
}
onBeforeUpdate(() => {
    itemRefs = ref([])
})
onMounted(() => {
    // emit('calcFe', () => {
    //   alert('A long way to come!')
    // })
})

//  single refs

const sliderValue = ref(0)
const calcFe = ref(0)


// emits

const emit = defineEmits(['calcFe'])



const calсFer = (arr) =>{
    console.log(2222)
}


const setProduct = (e)=>{
    // const elem = e.target
    // const el = e.originalEvent
    // console.log(e.originalEvent)
    // const slValue = el.innerText
    // const prodTitle = el.closest(".product").querySelector('.product-title').textContent

    // let sliderNumb = Number(el.getAttribute("aria-valuenow"))
   
    // if(sliderNumb > 0){
    //     let prodItem = document.createElement('li');   
    //     prodItem.setAttribute('class','prod-list');
    //     prodItem.innerHTML = `
    //     <span class="row-iron__result-text">${prodTitle}</span> .................  <span class="row-iron__result-value">${slValue}</span> 
    //     `;
    //     document.querySelector('.ration-list').appendChild(prodItem);     
    // }
}



// test emits

const changeValue = (e) =>{

}

const slideEnd = (e, item) =>{
    // const elem = e.target
    // e.stopPropagation
    // console.log('e.target', e.target)
    // console.log('product', prodTitle)

    // const sHandler = elem.closest('.p-slider-sliding .p-slider-handle')
    // const sHandlerVal = sHandler.innerText
    // const prodTitle = elem.closest(".product").querySelector('.product-title').textContent
    // let sliderNumb = Number(sHandler.getAttribute("aria-valuenow"))

    console.log('item.id', item)

}

const cancFer = () =>{
    let rationList = document.querySelector('.ration-list')
    rationList.innerHTML = '';
}


// data products

let rationProducts = [
    {
        title: 'Грудное вскармливание',
        products: [
            {
                productTitle: 'Кормление грудью в день',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/b513a0/mother.png',
                sliderMaxValue: 15,
                units: '',
                score: 0
            }
        ]
    },
    {
        title: 'Молочные продукты',
        products: [
            {
                productTitle: 'Детское молочко NAN® 3',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/9069e6/nan-3.png',
                sliderMaxValue: 990,
                units: 'мл',
                score: 0
            },
            {
                productTitle: 'Кефир',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/644f66/kefir.png',
                sliderMaxValue: 990,
                units: 'мл',
                score: 0
            },
            {
                productTitle: 'Коровье молоко (цельное)',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/9e688f/cow-milk.png',
                sliderMaxValue: 990,
                units: 'мл',
                score: 0
            },
            {
                productTitle: 'Кефир адаптированный',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/3fbcbf/kefir-adapt.png',
                sliderMaxValue: 990,
                units: 'мл',
                score: 0
            },
            {
                productTitle: 'Творог',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/ed58d3/curds.png',
                sliderMaxValue: 990,
                units: 'мл',
                score: 0
            },
            {
                productTitle: 'Йогурт (жирность 3,5%)',
                imgTitle: 'data:image/webp;base64,UklGRsAFAABXRUJQVlA4TLQFAAAvHgAHEJFdiOh/8OQQEmQCFgU29E/qjP7HuQGUtm07HskTut/v++qL7aTUtm3bvbTXtrWybaxsd69s2+4uI9b7dM9EcmxrO7Znv/ht+/9jaxCZgoeQ9GlTYgKuUqWzPQA76Wwbr245sm2rtjLXPleefdwtgpTU6Yo2gJSM3DpCRO7u7u7u+u3dc/aWAggAATj3tq1sTc2215Zsr9lWtKJtvP0fZ9u2twkAAgBp/jz3OjDgxfRgN2GaoU37gEeyyUDgHyDj218f6Wfcu/eMfO0H5breY8+GfVuMU1s2Az8ytjtO7c21bsQuh6Lp6XsNTzzU6tGzd422nWgLPMyA//qxUHV/7l76YdljOmEdju9sL3/pvN/1jysbOtpivxPI0M+o9LjTXlg++WYw8DMD395OR1gunx+gfjcePW397v5b1q3V3c2/WW4GfTOfx5hDVix79Xn+rxVD79oDlzNAR+73eHf01dz5B750PDKwIEZW2HQ6O85vmkwM5G4zT+CXWZJf7wZUZeD+3ZsjOyzcdDDU5WCCwpDCcrXdVMtNCiNfiPbtGi33bfN9d9PUZcfqBUB5etdiJuG5f0eqGXd9YdJ579wSTNUtHfLnYsydRwvM2rNdzulFFn85oeq8xtRdORt4ms6n+DlBrzfPYiIGSASUm/TMPx+89Ml116unqj3ZwLd6j3tO++GobFtsO3m4ALie2oPmY1kw8X46zSoicS4OMU4psWtpzeeF337J1jhz6JUrh2/zxhvdtm7Vc/v6GlmqA0sVxEOfvAH4AQAAvsffqGzzQlD/TX2T/Z0A1h88n4PMZJG4EAcGCBETYYKkotUTUxg4UhENxU0q0RFVCLgQkJ/qo15uS1YfKTH59YPu+zWDaU81a6pyDIKMAIyIIIEAMUKEQYxwAoEIBAKJMADDBA5RgCAwUeKlb2X0bYKuwG14cCPd8VKAFQiIACBwhgGACAEnAAAAAAJgAEjIyBNugOrUQtUQ4J5Xbr+dtboEkQASEjBghBEQAgIIRIgwIgIAABCZYiHK7y+2Pxf4DQC8kpc+1i7SgSwQAEAIuCQiCQghIQrgBCJJ1IxOInFhRYVAwAhISGDi11jKB+4BAABJ5JzReySCSAAMSOIHSSdSOu03sYfRhUghsRTlmSnJTUFnT6ylx6CvXAcKRggKoSnqgE4AAAAAPDbxmwUsVwUC+JiAonWRtfnQYy7ElEPTIWgVJIIGKJz3P74VeBy42pp9mjW5WtARuDjki0uAhBYqf8qmMKhkZLMm/pS2RQ3tIEVI8LYXFAIACAmyBlBvKkEmpa9lx7dZF9dm7mQEMg3UQmUiu7gkApeozRj7oqf+cBKoxiKJEQKA//OQSIPKwlGIeSLMnj+0/sW0s6tFqeam1w3UTYk8UqWevn8XEd3fon5Xy193YkQIAJKzRCr+OUNXZVh7Y9LwXj8GBtyiAviVCPhgRtN13s1bAm0uHgICSBkBCLw2xNQT5YCkBpRbNF72Fz9eSvbirOKvA7AwyShE0ypozNHfxfdhcemrKV1M5hIX9ZzQ29g1NWnUr76qbQ20jAXSggd4CAAAQAoxjCoToS3B22T7x7HDyzo6Q7nKVeBBMqDFzJ8XSRl/entWTc7o1KDll4b7b0XRBrQKEkEiyIBa+B/3+697XOJClj1ZGPINFMhcVA5IUSkqvrBRBggx59OGTpEXBb2t5edOSeKB8H9T2khBGwrazK9+F0p7qhngMgXUwYVUrKgkApA5B4mRT8mAn2MchyjEBVGiltjVotwPs7jMBzr6V1euS6URDinElxJiFTiIgpZzEiIAARhDAgNZp9IYIwJ8ZsaIHcDHVICPw5S+h6RjEUrWgAgADgQARgQhzEQgpCjhJFJIevDqodJM4HsqAKC+n5L3hg31SqWM/kfxJwpK/GckgkCOAKsSAB74nv1Ti5AQ++XiDcBB4DsgIQ==',
                sliderMaxValue: 990,
                units: 'мл',
                score: 0
            }
        ]
    },
    {
        title: 'Зерновые продукты',
        products: [
            {
                productTitle: 'Безмолочная гречневая каша',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/6fa443/xgrain-1.png.pagespeed.ic.epqRoh09q3.webp',
                sliderMaxValue: 990,
                units: 'г',
                score: 0
            },
            {
                productTitle: 'Безмолочная рисовая каша',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/6fa443/xgrain-1.png.pagespeed.ic.epqRoh09q3.webp',
                sliderMaxValue: 990,
                units: 'г',
                score: 0
            },
            {
                productTitle: 'Безмолочная кукурузная каша',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/31a0d6/grain-6.png',
                sliderMaxValue: 990,
                units: 'г',
                score: 0
            }

        ]
    },
    {
        title: 'Фрукты и овощи',
        products: [
            {
                productTitle: 'Курага',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/cc9d62/fr-veg-1.png',
                sliderMaxValue: 300,
                units: 'г',
                score: 0
            },
            {
                productTitle: 'Изюм',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/6926d2/fr-veg-5.png',
                sliderMaxValue: 300,
                units: 'г',
                score: 0
            },
            {
                productTitle: 'Банан',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/e556b3/fr-veg-8.png',
                sliderMaxValue: 300,
                units: 'г',
                score: 0
            }

        ]
    },
    {
        title: 'Мясо и рыба',
        products: [
            {
                productTitle: 'Говядина',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/21489e/meat-fish-1.png',
                sliderMaxValue: 480,
                units: 'г',
                score: 0
            },
            {
                productTitle: 'Телятина',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/c9b818/meat-fish-5.png',
                sliderMaxValue: 480,
                units: 'г',
                score: 0
            },
            {
                productTitle: 'Ягненок',
                imgTitle: 'https://www.nestlebaby.ru/static/f/tool_iron_calc/c9b818/meat-fish-5.png',
                sliderMaxValue: 480,
                units: 'г',
                score: 0
            }

        ]
    }
]

</script>

<style scoped>
    .test-slider{
        width: 30rem;
        margin: 0 auto;
    }

    .footer-level{
        display: flex;
        justify-content: space-between;
    }
</style>   
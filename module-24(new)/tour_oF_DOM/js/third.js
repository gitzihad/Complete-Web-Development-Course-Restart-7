const mainpart=document.getElementById('main-container')
const sec=document.createElement('section')

sec.innerHTML=`
    <h1>my dynamic section</h1>
    <p>extra text added in paragraph</p>
    <ul>
        <li>first item</li>
        <li>second item</li>
        <li>third item</li>
    </ul>    
`
mainpart.appendChild(sec)

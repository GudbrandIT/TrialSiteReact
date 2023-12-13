export function Main (content) {
   
    function clickButton1() {
        content = <div>Информация о продукции</div>
    }
    function clickButton2() {
        content = <div>Информация о сервисе</div>
    }
    function clickButton3() {
        content = <div>Информация о компании</div>
    }
    return (
        <div className="main">
            {content}
        </div>
    )
}
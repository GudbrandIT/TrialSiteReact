import { Main } from "./Main"

export function Navbar() {
    return (
        <ul className="navbar">
            <li id="nbButton1" onClick={() => Main.clickButton1()}>Продукция</li>
            <li id="nbButton2" onClick={() => Main.clickButton2()}>Сервис</li>
            <li id="nbButton3" onClick={() => Main.clickButton3()}>О Компании</li>
        </ul>
    )
}
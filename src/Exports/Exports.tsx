import { lazy } from "react";
import AvatarUi from "../Ui/Avatar";
import ButtonUI from "../Ui/Button";
import TextUi from "../Ui/Text";

import Logo from '../assets/boaBlack.png'
import InputUi from "../Ui/Input";
import CardComponent from "../Component/Card";
import HeroComponent from "../Component/Hero";
import MenuComponent from "../Component/Menu";

//Logo
export { Logo}

// Ui
export const Avatar = AvatarUi;
export const Button = ButtonUI
export const Text = TextUi
export const Input = InputUi

// Components
export const Card = CardComponent
export const Hero = HeroComponent
export const Menu = MenuComponent

// screens
export const Account = lazy(()=> import('../Pages/MainPage/Screens/Accounts'))
export const Transfer = lazy(()=> import('../Pages/MainPage/Screens/PayTransfer'))
export const History = lazy(()=> import('../Pages/MainPage/Screens/Trade'))
export const HelpSupport = lazy(()=> import('../Pages/MainPage/Screens/DepositChecks'))


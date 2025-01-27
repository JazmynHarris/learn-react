// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Profile from './components/profile_props';
// import Gallery from './qcomps/gallery_props';
import List from "./qcomps/list_keys_id";
import PackingList from "./components/props_item";
import Holder from "./components/square";
import RecipeList from "./qcomps/recipes";
import Gallery from "./qcomps/state";
import Form from "./qcomps/stuckForm";
import Counter from "./components/queueUpdates";
import RequestTracker from "./qcomps/shoppingCart";

export default function Home() {
  return (
    <RequestTracker />
  )
}

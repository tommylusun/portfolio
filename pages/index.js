// import styles from '../pages/styles.scss';
import Link from 'next/link'
import HomePage from '../components/homePage';
import './styles.css';
import Header from '../components/header';
import Head from 'next/head';

const Index = () => (
  <div className="main-background">
    <Header></Header>
    <HomePage></HomePage>
  </div>
)

export default Index;
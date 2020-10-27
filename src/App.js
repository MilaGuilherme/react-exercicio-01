import { Component } from 'react';
import './App.css';
import { TopMenu } from './components/TopMenu';
import { NavMenu } from './components/NavMenu';
import { SearchBar } from './components/SearchBar';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

export class App extends Component {
  state = {
    menuItems: [
      { title: 'Google', link: 'https://google.com' },
      { title: 'Apple', link: 'https://apple.com/br' },
      { title: 'Microsoft', link: 'https://microsoft.com' },
      { title: 'PUC Minas', link: 'https://pucminas.br' },
    ],
    sidebarSections: [
      { title: 'Section 1', link: '#' },
      { title: 'Section 2', link: '#' },
      { title: 'Section 3', link: '#' },
      { title: 'Section 4', link: '#' },
      { title: 'Section 5', link: '#' },
      { title: 'Section 6', link: '#' },
    ],
    mainContent: [
      {
        img: 'https://via.placeholder.com/300x200',
        alt: 'An image',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img: 'https://via.placeholder.com/300x200',
        alt: 'An image',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img: 'https://via.placeholder.com/300x200',
        alt: 'An image',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img: 'https://via.placeholder.com/300x200',
        alt: 'An image',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ]
  }


  render() {
    return (
      <>
        <header className="main-header">
          <h1>Logo</h1>
          <TopMenu />
          <SearchBar />
        </header>
        <NavMenu items={this.state.menuItems} />
        <main>
          <MainContent content={this.state.mainContent} />
        </main>
        <aside>
          <Sidebar sections={this.state.sidebarSections} />
        </aside>
      </>
    );
  }
}

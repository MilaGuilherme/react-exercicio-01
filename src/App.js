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

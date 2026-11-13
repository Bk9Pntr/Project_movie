// ==================================================
// メイン画面
//
//【画面概要】
// アプリケーション全体の画面構成を管理する
// ==================================================
import './App.css'; // 共通CSSの読み込み
import { useState } from 'react'; // ReactからuseStateを読み込む

// 画面コンポーネントの読み込み
import CMN0100Home from './pages/CMN-0100_Home';
import SCR0300MovieList from './pages/SCR-0300_MovieList';

function App() {
    // 現在のページをhomeに設定
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div>
            {currentPage === 'home' && (
                <CMN0100Home
                    onNavigate={() => setCurrentPage('movieListPage')}
                />
            )}

            {currentPage === 'movieListPage' && (
                <SCR0300MovieList
                    onBack={() => setCurrentPage('home')}
                />
            )}
        </div>
    );
}

export default App;
// ==================================================
// 映画一覧画面
//
//【画面概要】
// ユーザーの登録した映画を一覧で管理し表示する画面
// ==================================================
import { useState } from "react"; // ボタンの選択状態管理
import "./SCR-0300_MovieList.css";

// 画面遷移用のProps
type Props = {
    onBack: () => void;
};

function SCR0300MovieList({ onBack }: Props) {

    // 選択状態を管理する変数を設定(すべて表示:all、お気に入り:favorite、気になる映画:active))
    const [selectedFilter, setSelectedFilter] = useState("all");

    return (
        <div>
            <h1>映画一覧画面</h1>

            {/* 表示切替 */}
            <div className="btn-group" role="group" aria-label="映画表示切替">
                {/* 選択されているボタンだけにactiveクラスを付与 */}
                <button type="button"
                    className={`btn ${selectedFilter === "all" ? "active" : ""}`}
                    onClick={() => setSelectedFilter("all")}>すべて表示
                </button>
                <button type="button"
                    className={`btn ${selectedFilter === "favorite" ? "active" : ""}`}
                    onClick={() => setSelectedFilter("favorite")}>お気に入り
                </button>
                <button type="button"
                    className={`btn ${selectedFilter === "interested" ? "active" : ""}`}
                    onClick={() => setSelectedFilter("interested")}>気になる映画
                </button>
            </div>

            {/* 件数テキスト/追加ボタン */}
            <div className="add-container">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <span>視聴した映画：50件</span>
                    <button type="button" className="btn btn-primary">+映画を追加</button>
                </div>
            </div>

            {/* 並び替えコンボボックス */}
            <div className="d-flex gap-3 w-100 sort-container">
                <div className="col">
                    <select className="form-select">
                        <option>作品タイトル</option>
                        <option>評価</option>
                        <option>追加</option>
                    </select>
                </div>

                <div className="col">
                    <select className="form-select">
                        <option>あいうえお順</option>
                        <option>逆順</option>
                    </select>
                </div>
            </div>

            {/* 映画一覧 */}
            <div className="movie-list-container">
                <div className="movie-list">
                    <div className="movie-item">
                        {/* 映画画像 */}
                        <div className="movie-image"></div>

                        {/* 映画情報 */}
                        <div className="movie-info">
                            {/* 作品タイトルとアイコンボタン */}
                            <div className="movie-info-header">
                                <span>作品タイトル</span>
                                <div className="movie-info-buttons">
                                    <button type="button" className="btn">
                                        <i className="bi bi-bookmark-fill"></i>
                                    </button>
                                    <button type="button" className="btn">
                                        <i className="bi bi-brush"></i>
                                    </button>
                                </div>
                            </div>

                            {/* 映画の説明情報 */}
                            <div className="movie-info-description">
                                <span>公開年数：2026</span>
                                <span>上映時間：120分</span>
                                <span>☆<span className="rating">4.0</span>/5.0</span>
                            </div>

                            {/* 区切り線 */}
                            <hr />

                            {/* タグ一覧 */}
                            <div className="movie-info-tags">
                                <span>#タグ1</span>
                                <span>#タグ2</span>
                            </div>

                            {/* あらすじテキスト */}
                            <div className="movie-info-text">
                                テキスト
                            </div>

                            {/* 削除ボタン */}
                            <div className="movie-info-del">
                                <button type="button" className="btn"><i className="bi bi-trash-fill"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="movie-item">
                        {/* 映画画像 */}
                        <div className="movie-image"></div>

                        {/* 映画情報 */}
                        <div className="movie-info">
                            {/* 作品タイトルとアイコンボタン */}
                            <div className="movie-info-header">
                                <span>作品タイトル</span>
                                <div className="movie-info-buttons">
                                    <button type="button" className="btn"><i className="bi bi-bookmark-fill"></i></button>
                                    <button type="button" className="btn"><i className="bi bi-brush"></i></button>
                                </div>
                            </div>

                            {/* 映画の説明情報 */}
                            <div className="movie-info-description">
                                <span>公開年数：2026</span>
                                <span>上映時間：120分</span>
                                <span>☆<span className="rating">4.0</span>/5.0</span>
                            </div>

                            {/* 区切り線 */}
                            <hr />

                            {/* タグ一覧 */}
                            <div className="movie-info-tags">
                                <span>#タグ1</span>
                                <span>#タグ2</span>
                            </div>

                            {/* あらすじテキスト */}
                            <div className="movie-info-text">
                                テキスト
                            </div>

                            {/* 削除ボタン */}
                            <div className="movie-info-del">
                                <button type="button" className="btn"><i className="bi bi-trash-fill"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="movie-item">
                        {/* 映画画像 */}
                        <div className="movie-image"></div>

                        {/* 映画情報 */}
                        <div className="movie-info">
                            {/* 作品タイトルとアイコンボタン */}
                            <div className="movie-info-header">
                                <span>作品タイトル</span>
                                <div className="movie-info-buttons">
                                    <button type="button" className="btn"><i className="bi bi-bookmark-fill"></i></button>
                                    <button type="button" className="btn"><i className="bi bi-brush"></i></button>
                                </div>
                            </div>

                            {/* 映画の説明情報 */}
                            <div className="movie-info-description">
                                <span>公開年数：2026</span>
                                <span>上映時間：120分</span>
                                <span>☆<span className="rating">4.0</span>/5.0</span>
                            </div>

                            {/* 区切り線 */}
                            <hr />

                            {/* タグ一覧 */}
                            <div className="movie-info-tags">
                                <span>#タグ1</span>
                                <span>#タグ2</span>
                            </div>

                            {/* あらすじテキスト */}
                            <div className="movie-info-text">
                                テキスト
                            </div>

                            {/* 削除ボタン */}
                            <div className="movie-info-del">
                                <button type="button" className="btn"><i className="bi bi-trash-fill"></i></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* <button onClick={onBack}>
                ホームに戻る
            </button> */}
        </div>
    );
}

export default SCR0300MovieList;
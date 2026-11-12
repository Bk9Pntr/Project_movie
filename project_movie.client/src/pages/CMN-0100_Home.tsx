// ==================================================
// ホーム画面
//
//【画面概要】
// ログイン認証が成功したユーザーに対して表示するメイン画面
// ==================================================
import "./CMN-0100_Home.css";

// 画面遷移用のProps
type Props = {
    onNavigate: () => void;
};

function CMN0100Home({ onNavigate }: Props) {
    return (
        <div>
            <h1>鑑賞レポート</h1>
            <h2>あなたの映画記録を振り返る</h2>

            <div className="container">
                <div className="container-box">                    
                    {/* 1段目 */}
                    <div className="container-row-left">
                        <i className ="container-icon bi bi-camera-reels-fill"></i>
                        <h3>視聴本数</h3>
                    </div>

                    {/* 2段目 */}
                    <div className="container-row-right">
                        <p className="p1">50</p>
                        <p className="p2">本</p>
                    </div>
                </div>

                <div className="container-box">
                    {/* 1段目 */}
                    <div className="container-row-left">
                        <i className="container-icon bi bi-film"></i>
                        <h3>未視聴本数</h3>
                    </div>

                    {/* 2段目 */}
                    <div className="container-row-right">
                        <p className="p1">10</p>
                        <p className="p2">本</p>
                    </div>
                </div>
            </div>

            {/* 最近見た映画 */}
            <div className="movie-list">
                <div className="accordion accordion-flush" id="movieAccordion1">
                    <div className="accordion-item">

                        <h1 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#movieCollapse1"
                                aria-expanded="false"
                                aria-controls="movieCollapse1"
                            >
                                最近見た映画
                            </button>
                        </h1>

                        <div
                            id="movieCollapse1"
                            className="accordion-collapse collapse show"
                        >
                            <div className="accordion-body">

                                <h2>これまでに観た映画を振り返る</h2>

                                <div className="d-flex flex-nowrap overflow-x-auto gap-3">

                                    {/* 映画カード1 */}
                                    <div className="movie_box">
                                        <div className="movie-img">画像イメージ</div>
                                        <div className="movie-title">映画タイトル</div>
                                        <button type="button" className="btn btn-outline-primary movie-btn">
                                            <i className="bi bi-bookmark"></i> お気に入り
                                        </button>
                                        <div className="movie-date">登録日：今日追加</div>
                                        <div className="movie-date">#アクション　#洋画</div>
                                    </div>

                                    {/* 映画カード2 */}
                                    <div className="movie_box">
                                        <div className="movie-img">画像イメージ</div>
                                        <div className="movie-title">映画タイトル</div>
                                        <button type="button" className="btn btn-outline-primary movie-btn">
                                            <i className="bi bi-bookmark"></i> お気に入り
                                        </button>
                                        <div className="movie-date">登録日：昨日追加</div>
                                        <div className="movie-date">#ホラー　#洋画</div>
                                    </div>

                                    {/* 映画カード3 */}
                                    <div className="movie_box">
                                        <div className="movie-img">画像イメージ</div>
                                        <div className="movie-title">映画タイトル</div>
                                        <button type="button" className="btn btn-outline-primary movie-btn">
                                            <i className="bi bi-bookmark"></i> お気に入り
                                        </button>
                                        <div className="movie-date">登録日：2026.11.02</div>
                                        <div className="movie-date">#コメディ</div>
                                    </div>

                                    {/* 映画カード4 */}
                                    <div className="movie_box">
                                        <div className="movie-img">画像イメージ</div>
                                        <div className="movie-title">映画タイトル</div>
                                        <button type="button" className="btn btn-outline-primary movie-btn">
                                            <i className="bi bi-bookmark"></i> お気に入り
                                        </button>
                                        <div className="movie-date">登録日：2026.11.02</div>
                                        <div className="movie-date"></div>
                                    </div>

                                    {/* 映画カード5 */}
                                    <div className="movie_box">
                                        <div className="movie-img">画像イメージ</div>
                                        <div className="movie-title">映画タイトル</div>
                                        <button type="button" className="btn btn-outline-primary movie-btn">
                                            <i className="bi bi-bookmark"></i> お気に入り
                                        </button>
                                        <div className="movie-date">登録日：2026.08.01</div>
                                        <div className="movie-date">#インド映画</div>
                                    </div>

                                    <i
                                        className="bi bi-arrow-right-circle align-self-center arrow-icon"
                                        onClick={onNavigate}
                                        style={{ cursor: "pointer" }}
                                    ></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* 好きな映画の傾向 */}
            <div className="movie-trends">
                <div className="accordion accordion-flush" id="movieAccordion2">
                    <div className="accordion-item">

                        <h1 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#movieCollapse2"
                                aria-expanded="false"
                                aria-controls="movieCollapse2"
                            >
                                好きな映画の傾向
                            </button>
                        </h1>

                        <div
                            id="movieCollapse2"
                            className="accordion-collapse collapse"
                        >
                            <div className="accordion-body">
                                <h2>カテゴリを選んで、自分の好みを分析する</h2>

                                <div className="tag-category">
                                    <button className="tag-btn" type="button">ジャンル</button>
                                    <button className="tag-btn" type="button">映画カテゴリ</button>
                                    <button className="tag-btn" type="button">出演者：女優</button>
                                </div>

                                <div className="input-row">
                                    <label>映画カテゴリ</label>
                                    <span>タグ数：30件</span>

                                    <select className="form-select">
                                        <option value="desc">多い順</option>
                                        <option value="asc">少ない順</option>
                                    </select>
                                </div>

                                <div className="tag-result">


                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default CMN0100Home;

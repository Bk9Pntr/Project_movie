// ===========================================
// 鑑賞記録画面
//
//【画面概要】
// 映画を追加したり、編集する画面です。
// ==================================================
import "./SCR-0200_.ViewingRecord.css";
import { useState } from "react"; // ReactからuseStateを読み込む
import DLG0001TagEdit from "./DLG-0001_TagEdit"; // ダイアログの表示状態を管理するStateの初期定義

function SCR0200ViewingRecord() {

    // 画像名を管理
    const [imageName, setImageName] = useState("");

    // 画像名表示
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setImageName(file.name);
        }
    };

    // 現在選択されているカテゴリを管理するためのState
    const [selectedCategory, setSelectedCategory] = useState("ジャンル");

    // ユーザーが選択したタグを管理するためのState
    const [selectedTags, setSelectedTags] = useState<
        { category: string; name: string }[]
    >([]);

    // タグの選択肢をあらかじめ用意する
    const tagOptions: { [key: string]: string[] } = {
        "ジャンル": ["アクション", "恋愛", "コメディ", "ホラー", "SF", "ミステリー", "歴史・時代劇", "ミュージカル", "スポーツ", "ヒューマンドラマ", "ドキュメンタリー"],
        "映画カテゴリ": ["洋画", "邦画", "アニメ映画", "実写映画", "短編映画"],
        "出演者：女優": ["女優A", "女優B", "女優C"]
    };

    // 現在のカテゴリに対応するタグを取得する
    const availableTags = tagOptions[selectedCategory] ?? [];

    // タグ追加処理
    const handleAddTag = (tag: string) => {
        setSelectedTags((prev) => {
            const exists = prev.some(
                (item) =>
                    item.category === selectedCategory &&
                    item.name === tag
            );

            if (exists) return prev;

            return [
                ...prev,
                { category: selectedCategory, name: tag }
            ];
        });
    };

    // タグ削除
    const handleRemoveTag = (category: string, tag: string) => {
        setSelectedTags((prev) =>
            prev.filter(
                (item) =>
                    !(item.category === category && item.name === tag)
            )
        );
    };

    // 自分の評価を管理
    const [rating, setRating] = useState(0);

    // お気に入り状態を管理
    const [isFavorite, setIsFavorite] = useState(false);

    // タグ編集ダイアログの表示状態を管理するStateの
    const [isTagEditOpen, setIsTagEditOpen] = useState(false);

    return (
        <div>
            <h1>映画を記録する</h1>
            {/* <h2>観た映画と、その時感じたことを残そう</h2> */}
            <div className="works-title">
                <h2>観た映画と、その時感じたことを残そう</h2>
                <h3><span className="required-mark">※</span>は入力必須です</h3>
            </div>

            {/* 作品情報 */}
            <div className="works-info-container">
                <div className="accordion accordion-flush" id="works-info-Accordion">
                    <div className="accordion-item">

                        {/* アコーディオン見出し */}
                        <h1 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#works-info-Collapse" // どの部分を開閉するのか指定
                                aria-expanded="false"
                                aria-controls="works-info-Collapse" // 操作対象の要素を指定
                            >
                                作品情報
                            </button>
                        </h1>

                        {/* 開閉されるコンテンツ */}
                        <div
                            id="works-info-Collapse"
                            className="accordion-collapse collapse show"
                        >
                            <div className="accordion-body">

                                {/* 作品タイトル */}
                                <div className="works-input-title">
                                    <h2>作品タイトル<span className="required-mark">※</span></h2>
                                    <input className="form-control" type="text" placeholder="映画のタイトルを入力" />
                                </div>

                                {/* 公開年数・上映時間 */}
                                <div className="works-input-group">
                                    <div className="works-input-item">
                                        <h2>公開年数</h2>
                                        <div className="input-unit">
                                            <input type="number" placeholder="2026" min="1880" max="2100" step="1" />
                                            <span>年</span>
                                        </div>
                                    </div>

                                    <div className="works-input-item">
                                        <h2>上映時間</h2>
                                        <div className="input-unit">
                                            <input type="number" placeholder="120" min="30" max="900" step="1" />
                                            <span>分</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 作品画像*/}
                                <div className="works-input-img">
                                    <h2>作品画像</h2>

                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="画像を選択してください" value={imageName} readOnly />
                                        <button type="button" className="btn btn-outline-primary" onClick={() => document.getElementById("image-upload")?.click()} >参照</button>
                                        <input id="image-upload" type="file" accept="image/*" hidden onChange={handleImageChange} />
                                    </div>
                                </div>

                                {/* 感想メモ */}
                                <div className="works-input-comment">
                                    <div className="mb-3">
                                        <h2>感想・メモ</h2>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows={3}
                                            placeholder="物語のあらすじや印象に残ったシーン、そこから感じたことを書いてみよう"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* タグ選択 */}
            <div className="record-tag-trends">
                <div className="accordion accordion-flush" id="record-tag-Accordion">
                    <div className="accordion-item">

                        <h1 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#record-tag-Collapse"
                                aria-expanded="false"
                                aria-controls="record-tag-Collapse"
                            >
                                タグ選択
                            </button>
                        </h1>

                        <div
                            id="record-tag-Collapse"
                            className="accordion-collapse collapse"
                        >
                            <div className="accordion-body">

                                {/* カテゴリ選択 */}
                                <div className="record-tag-category">
                                    <h2>カテゴリ選択</h2>

                                    <div className="d-flex gap-3 w-100 sort-container">
                                        <div className="col">
                                            {/* カテゴリ選択用のセレクタボックス */}
                                            <select
                                                className="form-select"

                                                // 現在選択されているカテゴリ名を表示
                                                value={selectedCategory}

                                                // カテゴリが変更されたらselectedCategoryを更新
                                                onChange={(e) =>
                                                    setSelectedCategory(e.target.value)
                                                }
                                            >
                                                {/* プルダウンの中に表示する選択肢を作成 */}
                                                {Object.keys(tagOptions).map((category) => (
                                                    <option key={category} value={category}>
                                                        {category}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* 選択済みタグ */}
                                <div className="record-selected-tags">

                                    {/* タグ管理ボタン */}
                                    <div className="selected-tags-header">
                                        <h2>選択済みタグ</h2>
                                        <button type="button" className="btn btn-secondary" onClick={() => setIsTagEditOpen(true)}>タグ管理</button>
                                    </div>
                                    <div className="selected-tags">
                                        {selectedTags.map((tag) => (
                                            <span
                                                className="record-tag-item"
                                                key={`${tag.category}-${tag.name}`}
                                            >
                                                <span className="record-tag-name">
                                                    #{tag.name}
                                                </span>

                                                <button
                                                    type="button"
                                                    className="record-tag-close"
                                                    onClick={() =>
                                                        handleRemoveTag(
                                                            tag.category,
                                                            tag.name
                                                        )
                                                    }
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        ))}
                                    </div>



                                    {/* 選択タグリスト */}
                                    <div className="record-tags-list">
                                        <div className="record-tags-list-inner">
                                            {availableTags.map((tag) => {
                                                const isSelected = selectedTags.some(
                                                    (item) =>
                                                        item.category === selectedCategory &&
                                                        item.name === tag
                                                );

                                                return (
                                                    <button
                                                        type="button"
                                                        key={tag}
                                                        className={`record-tag-option ${isSelected ? "selected" : ""}`}
                                                        disabled={isSelected}
                                                        onClick={() => handleAddTag(tag)}
                                                    >
                                                        {tag}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 視聴記録 */}
            <div className="record-trends">
                <div className="accordion accordion-flush" id="viewing-record-Accordion">
                    <div className="accordion-item">

                        <h1 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#viewing-record-Collapse"
                                aria-expanded="false"
                                aria-controls="viewing-record-Collapse"
                            >
                                視聴記録
                            </button>
                        </h1>

                        <div
                            id="viewing-record-Collapse"
                            className="accordion-collapse collapse"
                        >
                            <div className="accordion-body">
                                {/* 自分の評価 */}
                                <div className="record-trends-stars">
                                    <h2>自分の評価</h2>

                                    {/* 星と評価値を横並び */}
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <i
                                                    key={star}
                                                    className={`bi bi-star-fill ${rating >= star ? "active" : ""}`}
                                                    onClick={() => setRating(star === 1 && rating === 1 ? 0 : star)}
                                                ></i>
                                            ))}
                                        </div>

                                        <div>
                                            <span className="rating-value">{rating}</span>
                                            <span className="rating-max"> / 5</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="record-favorite">
                                    <div className={`favorite-btn ${isFavorite ? "active" : ""}`}>
                                        <button
                                            type="button"
                                            className={`btn ${isFavorite ? "active" : ""}`}
                                            onClick={() => setIsFavorite(!isFavorite)}
                                        >
                                            <i className="bi bi-bookmark-fill"></i>
                                        </button>
                                        <div className="favorite-text">
                                            <h2>お気に入りに追加</h2>
                                            <h3>お気に入り一覧に保存します</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* タグ編集ダイアログ */}
            <DLG0001TagEdit
                show={isTagEditOpen}
                onClose={() => setIsTagEditOpen(false)}
            />
        </div>
    );
}

export default SCR0200ViewingRecord;
// ===========================================
// タグ編集用モーダルダイアログ画面
//
//【画面概要】
// 編集ボタンが押された際に表示するモーダルダイアログ
// ==================================================
import { useState } from "react"; // ボタンの選択状態管理
import "./DLG-0001_TagEdit.css";

type Props = {
    show: boolean;
    onClose: () => void;
};

function DLG0001TagEdit({ show, onClose }: Props) {

    // 非表示の場合は何も表示しない
    if (!show) {
        return null;
    }

    // 表示切替の選択状態
    const [selectedFilter, setSelectedFilter] = useState("all"); // all：すべて表示
    return (
        <>
            {/* Bootstrap：半透明の黒い背景 */}
            <div className="modal-backdrop fade show"></div>

            {/* モーダル */}
            <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-modal="true" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        {/* ヘッダー */}
                        <div className="modal-header">
                            <h5 className="modal-title">タグ・カテゴリの編集</h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="閉じる" ></button>
                        </div>

                        {/* ボディ */}
                        <div className="modal-body">
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
                            </div>

                            {/* カテゴリコンボボックス */}
                            <div className="saved-category">
                                <span>登録済みカテゴリ</span>
                                <div className="d-flex gap-3 w-100 sort-container">
                                    <div className="col">
                                        <select className="form-select">
                                            <option>ジャンル</option>
                                            <option>映画カテゴリ</option>
                                            <option>出演者：女優</option>
                                            <option>出演者：俳優</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* 登録済みタグ */}
                            <div className="saved-tag">
                                <span>登録済みタグ</span>

                                <div className="category-container">
                                    
                                </div>
                            </div>


                        </div>

                        {/* フッター */}
                        <div className="modal-footer">
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default DLG0001TagEdit;
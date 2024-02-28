// <div>
        //     <div id="price-calculator" className="calculator">
        //         <h2>Calculate your paper price</h2>
        //         <label htmlFor="paperType">Type of paper</label>
        //         <select id="paperType">
        //             {/* Your options here */}
        //         </select>
            
        //         <label htmlFor="academicLevel">Academic level</label>
        //         <select id="academicLevel" value={academicLevel} onChange={e => setAcademicLevel(e.target.value)}>
        //             {/* Your options here */}
        //         </select>
            
        //         <label htmlFor="deadline">Deadline</label>
        //         <select id="deadline" value={deadline} onChange={e => setDeadline(e.target.value)}>
        //             {/* Your options here */}
        //         </select>
            
        //         <label htmlFor="pages">Pages</label>
        //         <div className="page-counter">
        //             <button type="button" onClick={() => changePageCount(-1)}>-</button>
        //             <input type="number" id="pageCount" value={pageCount} min="1" onChange={e => setPageCount(e.target.value)} />
        //             <button type="button" onClick={() => changePageCount(1)}>+</button>
        //             (275 words)
        //         </div>
            
        //         <div className="price-display">
        //             Approximate price: <span id="price">{calculatePrice()}</span>
        //         </div>
            
        //         <button type="button" onClick={continueToOrder}>CONTINUE TO ORDER</button>
        //     </div>
        //     <button onClick={() => changePageCount(-1)}>Decrease Page Count</button>
        //     <button onClick={() => changePageCount(1)}>Increase Page Count</button>
        //     <p>{calculatePrice()}</p>
        //     <button onClick={continueToOrder}>Continue to Order</button>
        // </div>
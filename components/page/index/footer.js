
import ImportImage from '../../common/importImage'
function Footer () {
    return (
        <footer className="footer">
            <div className="footer-image">
                <ImportImage path="index/github.svg"></ImportImage>
            </div>
            <p>博客github地址</p>
            <div>

            </div>
            <style jsx global>{`
                .footer{
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px 0px;
                }
                .footer-image img{
                    width: 30px;
                    cursor: pointer;
                    margin-bottom: 10px;
                }
                .footer p{
                    color: #333;
                }
            `}</style>
        </footer>
    )
}
export default Footer
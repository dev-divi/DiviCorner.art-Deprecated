import React, {useState} from 'react';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../library_system/texts_all'
import Link from 'next/link'
import Date from '/library_system/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
const AllTexts = ({ allPostsData }) => {
    return ( 
        <> 
                {/* Texts autoload */}
                
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>  </h2>
                    <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, category }) => (
                        <li className={utilStyles.listItem} key={id}>
                        <span className={utilStyles.linksUnderline}> 
                        {category} - 
                        <Link href={`/texts/${id}`}>
                        <a>{title}</a>
                        </Link> 
                        </span>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                        </li>
                    ))}
                    </ul>
                </section>            

        </>
     );
}
 
export default AllTexts;
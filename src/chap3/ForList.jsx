import { Fragment } from 'react';

export default function ForList({ src }) {
    return (
        <dl>
            {
                src.map(elem => (
                    <Fragment key={elem.isbn}>
                        <dt>
                            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                                {elem.title}（{elem.price}円）
                            </a>
                        </dt>
                        <dd>{elem.summary}</dd>
                    </Fragment>
                ))
            }
        </dl>
    );
};

'use client';

import {FC} from 'react';
import { useSearchParams } from 'next/navigation';

const SearchPage: FC = ({}) => {
    const searchParams = useSearchParams();
    const querySearch = searchParams.get('query');
    console.log(querySearch)

    return (<div>SearchPage</div>);
}

export default SearchPage;

import {useRouter, useSearchParams} from 'next/navigation'
type Props = {}

type searchType ={
  query:{
    search:string;
    sort:string
    page:string
  }
}

const useCustomeRouter = () => {
  const router = useRouter()
  const searchParams =useSearchParams()
  const query:any| searchType ={}

  let search = searchParams.get('search')
  let sort = searchParams.get('sort')
  let page = searchParams.get('page')
  if(search) query.search = search
  if(sort) query.sort = sort
  if(page) query.page = parseInt(page)

  const pushQuery =({search,sort,page}:any)=>{
    if(search !== undefined){
      search === ''? delete query.search : query.search =search
    }

    if(sort !== undefined){
      sort=== 'createdAt'? delete query.sort : query.sort =sort
    }
    if(page !== undefined){
      page === 1 ? delete query.page : query.page = page
    }


    const newQuery =new URLSearchParams(query).toString()

    router.push(`?${newQuery}`)
  }
  return {pushQuery,query}
}

export default useCustomeRouter
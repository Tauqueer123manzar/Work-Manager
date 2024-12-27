async function takeTime(){
    await new Promise(resolve => setTimeout(resolve,3000))
}
export default async function about(){
  await takeTime();
  // throw new Error("something went wrong")
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  )
}


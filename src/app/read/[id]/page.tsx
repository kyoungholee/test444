

export default async function Read(props : any) {

  const response = await fetch(`http://localhost:9999/topics/${props.params.id}`, {cache: 'no-store'});

  const topic = await response.json();



  return (
    <div>
      <h2>이곳은 게시판을 읽어 주는 페이지 입니다.</h2>
      <h3>현재 테스트를 진행중입니다.</h3>
      곧 백엔드를 연동해 실제 데이터를 넣어보gg겠씁니다.
    </div>
  )
}

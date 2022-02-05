bootswatch - UIcomponent
https://react-bootstrap.netlify.app/components/navbar/#navbars

# ＃７

### Router 問題１

最近になって、Router の使い方が変わったようで、そのままビデオの通り書いても動かない、エラーになる。

```
<Route path="/" component={LandingPage} exact />
```

この書き方を、

```
<Routes>
    <Route path="/" element={<LandingPage/>} exact />
</ Routes>
```

に置き換える必要がある。component が element に変わってたり、Route を Routes で囲む必要があったり。

参考記事
https://flutterq.com/error-a-route-is-only-ever-to-be-used-as-the-child-of-element-never-rendered-directly-please-wrap-your-route-in-a-routes/#:~:text=routes%20by%20Routes%20.-,Error%3A%20A%20Route%20is%20only%20ever%20to%20be%20used%20as,wrap%20your%20routes%20by%20Routes%20.    
  
---
  　
### Router 問題２  
```
<Nav.Link href="/mynotes">
    <Link to="/mynotes">My Notes</Link>
</Nav.Link>
```  
Nav.LinkはBootstrap、かつこの中にアンカータグaが隠れているらしく、ビデオではこれで動いてるけど、エラーが出る。hrefを消しても。
aタグがあるよーっていう内容だと思う。
だから、Nav.Linkではなくて、Navとだけするとエラーは消える。だけど、Nav.Linkに設定されていたcssは当然効かなくなる。
エラーの解決方法：https://thewebdev.info/2021/09/28/how-to-fix-the-warning-validatedomnesting-a-cannot-appear-as-a-descendant-of-a-error-when-developing-react-apps/#:~:text=Developing%20React%20Apps-,To%20fix%20the%20%22Warning%3A%20validateDOMNesting(%E2%80%A6)%3A%20%3Ca,a%20elements%20within%20a%20elements.&text=Browsers%20will%20fix%20the%20HTML,DOM%20different%20from%20what's%20rendered.  

->でも解決した。
```
<Nav.Link as={Link} to="/" >Home</Nav.Link>
```
https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
https://thewebdev.info/2021/11/15/how-to-add-links-to-a-react-router-route-with-react-bootstrap/

  
---

### Edit & Delete buttonについて

```
<Button href={`/note/${note._id}`}>Edit</Button>
<Button
    variant="danger"
    className="mx-2"
    onClick={() => deleteHandler(note._id)}
>
Delete
</Button>
```
まずEditボタン押すと、まだ遷移先は作ってないけど、パラメータにidがついてページに飛ぶ。ボタン押してみたらわかる。
deleteボタンについて、これまでonclick{fanction}で()付けてしまうと勝手に発動するようになってたが、アノニマスファンクションにすることで、引数を事前渡せるし、クリックした時に発動するようになっている。  
  
## Warning!
  
Bootstrapのアコーディオンが刷新されたため、npmで古いreact-bootstrapに変更。
bootstrapの変更点はURLの通り。
https://engineering.linecorp.com/ja/blog/bootstrap5/#b2


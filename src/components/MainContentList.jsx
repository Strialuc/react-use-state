function MainContentList(props) {

    // destrutturiamo props
    const { title, id, description } = props;


    return (
        <div className="container-list">

            <button type="button" class="btn btn-primary btn-lg">
                {title}
            </button>
        </div>
    )
}

export default MainContentList
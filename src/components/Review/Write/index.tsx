"use client";
import * as S from "./style";
import { useState } from "react";
import { marked } from "marked";
import { useDropzone } from "react-dropzone";
import { useParams, useRouter } from "next/navigation";

const ReviewWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pass, setPass] = useState("");
  const { id } = useParams();
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const onDrop = async (acceptedFiles: File[]) => {
    const newImageUrls: string[] = [];

    for (const file of acceptedFiles) {
      const url = await uploadImage(file);
      newImageUrls.push(url);
      setContent((prev) => prev + `\n![Image](${url})`);
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/images/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    const imageId = data.id;
    return `http://localhost:8080/images/${imageId}`;
  };

  const handleSubmit = async () => {
    if (title == "" || content == "" || pass == "") return false;

    const reviewData = {
      title: title,
      content: content,
      movieId: id,
      password: pass,
    };

    try {
      await fetch(`/api/reviews/write/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
      setTitle("");
      setContent("");

      router.push(`/movie/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <S.Container>
      <S.LeftPane>
        <S.TitleInput
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <S.DropzoneContainer {...getRootProps()}>
          <input {...getInputProps()} />
          <p>여기에 이미지를 드래그하거나 클릭하여 업로드하세요.</p>
        </S.DropzoneContainer>
        <S.TextArea
          placeholder="여기에 마크다운을 입력하세요."
          value={content}
          onChange={handleChange}
          required
        />
        <S.PassInput
          type="password"
          placeholder="Password(숫자)"
          value={pass}
          onChange={handlePassChange}
          required
        />
        <S.Button onClick={handleSubmit}>리뷰 등록하기</S.Button>
      </S.LeftPane>
      <S.RightPane>
        <h1>{title}</h1>
        <S.Preview dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </S.RightPane>
    </S.Container>
  );
};

export default ReviewWrite;

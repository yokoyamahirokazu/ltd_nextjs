import { NextPage } from 'next';
import React from 'react';
import styles from '@styles/components/Components.module.css';
import SeoContent from '@components/SeoContent';
import Router from 'next/router';
import Button from '@components/Button';

import { useForm } from 'react-hook-form';

const Index: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const submit = (values) => {
    fetch('/api/career', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.status === 200) {
        Router.push('/contact/thanks');
      }
    });
  };

  return (
    <>
      <SeoContent
        pageTitle='お問い合わせ'
        pageDescription='株式会社LTDへのお問い合わせページです。'
      />
      <div className={styles.contactPageFlex}>
        <div className={styles.contactPageFlexLeft}>
          <div className={styles.contactPageFlexInner}>
            <h1 className={styles.headline}>
              採用情報への
              <br />
              お問い合わせ
            </h1>
            <p>
              弊社に採用情報にご関心いただきありがとうございます。
              必須項目を入力の上、フォームの送信をお願いします。
              担当者が内容を確認の上、折り返し連絡させていただきます。
            </p>
          </div>
        </div>
        <div className={styles.contactPageFlexRight}>
          <div className={styles.contactPageFlexInner}>
            <div className={styles.contactContent}>
              <form onSubmit={handleSubmit(submit)}>
                <div className={styles.formContentBox}>
                  <label htmlFor='name'>
                    お名前<span className={styles.required}>必須</span>
                  </label>
                  <input
                    type='text'
                    name='name'
                    {...register('name', { required: true, maxLength: 80 })}
                  />
                  {errors.name?.type === 'required' && (
                    <p className={styles.errorText}>この質問は必須項目です</p>
                  )}
                  {errors.name?.type === 'maxLength' && (
                    <p className={styles.errorText}>
                      80文字以内で記入してください
                    </p>
                  )}
                </div>
                <div className={styles.formContentBox}>
                  <label htmlFor='email'>
                    メールアドレス<span className={styles.required}>必須</span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email?.type === 'required' && (
                    <p className={styles.errorText}>この質問は必須項目です</p>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <p className={styles.errorText}>
                      メールアドレスを入力してください
                    </p>
                  )}
                </div>
                <div className={styles.formContentBox}>
                  <label htmlFor='tel'>
                    電話番号<span className={styles.required}>必須</span>
                  </label>
                  <input
                    type='tel'
                    name='tel'
                    {...register('tel', {
                      required: true,
                      maxLength: 14,
                    })}
                  />
                  {errors.tel?.type === 'required' && (
                    <p className={styles.errorText}>この質問は必須項目です</p>
                  )}
                  {errors.tel?.type === 'maxLength' && (
                    <p className={styles.errorText}>
                      電話番号を記入してください
                    </p>
                  )}
                </div>

                <div className={styles.formContentBox}>
                  <label htmlFor='message'>
                    メッセージ<span className={styles.required}>必須</span>
                  </label>
                  <textarea
                    name='message'
                    {...register('message', { required: true })}
                  ></textarea>
                  {errors.message?.type === 'required' && (
                    <p className={styles.errorText}>この質問は必須項目です</p>
                  )}
                </div>
                <Button bgColor='primary' size='large' types='submit'>
                  送信する
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
